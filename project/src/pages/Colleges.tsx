import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, 
  BarChart2, 
  ChevronDown, 
  Search, 
  Filter,
  GraduationCap,
  Building,
  Star,
  Globe,
  Award,
  BookOpen,
  RefreshCw
} from 'lucide-react';

// --- TYPES ---
interface College {
  id: number;
  name: string;
  city: string;
  state: string;
  type: 'University' | 'College' | 'Institute';
  ranking?: number;
  nirf_ranking?: number;
  degrees: string[];
  description?: string;
  logo?: string;
}

interface FilterOptions {
  states: string[];
  cities: string[];
  types: string[];
  degrees: string[];
}

interface Filters {
  state: string;
  city: string;
  type: string;
  degree: string;
  search: string;
}

// --- API CONSTANTS ---
const API_BASE_URL = 'http://localhost:5000';

// --- CUSTOM SELECT COMPONENT ---
const FilterSelect: React.FC<{
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  icon?: React.ReactNode;
}> = ({ label, id, value, onChange, options, icon }) => (
  <div className="relative">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      <span className="flex items-center gap-2">{icon}{label}</span>
    </label>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-400"
      >
        <option value="All">All {label.toLowerCase()}</option>
        {options && options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

// --- SEARCH COMPONENT ---
const SearchBar: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}> = ({ value, onChange, placeholder }) => (
  <div className="relative">
    <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-400"
    />
  </div>
);

// --- COLLEGE CARD COMPONENT ---
const CollegeCard: React.FC<{ college: College }> = ({ college }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'University': return <Building className="w-5 h-5 text-blue-500" />;
      case 'Institute': return <Award className="w-5 h-5 text-purple-500" />;
      default: return <GraduationCap className="w-5 h-5 text-green-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'University': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Institute': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex-shrink-0">
          {college.logo ? (
            <img 
              src={college.logo} 
              alt={`${college.name} logo`} 
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-full bg-white p-2 shadow-md"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          ) : (
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-md">
              {getTypeIcon(college.type)}
            </div>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {college.name}
              </h2>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm lg:text-base">{college.city}, {college.state}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(college.type)}`}>
                {college.type}
              </span>
            </div>
          </div>

          {college.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mb-4 line-clamp-2">
              {college.description}
            </p>
          )}

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Degrees Offered:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {college.degrees && college.degrees.slice(0, 4).map((degree, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs">
                  {degree}
                </span>
              ))}
              {college.degrees && college.degrees.length > 4 && (
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg text-xs font-medium">
                  +{college.degrees.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-4 lg:gap-3 items-center lg:items-end flex-shrink-0">
          {college.nirf_ranking && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-xs text-gray-600 dark:text-gray-400">NIRF</span>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-yellow-600 dark:text-yellow-500">{college.nirf_ranking}</div>
            </div>
          )}
          {college.ranking && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-xs text-gray-600 dark:text-gray-400">Global</span>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-500">{college.ranking}</div>
            </div>
          )}
          <BarChart2 className="w-6 h-6 text-gray-400 hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Colleges: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    states: [], cities: [], types: [], degrees: []
  });
  const [filters, setFilters] = useState<Filters>({
    state: 'All', city: 'All', type: 'All', degree: 'All', search: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- FETCH COLLEGES ---
  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log('Attempting to fetch colleges from:', `${API_BASE_URL}/api/colleges`);
        const response = await fetch(`${API_BASE_URL}/api/colleges`);
        
        console.log('Response status:', response.status);
        console.log('Response URL:', response.url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - Make sure backend server is running on port 5000`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (data.success && Array.isArray(data.data)) {
          setColleges(data.data);
          console.log(`Successfully loaded ${data.data.length} colleges`);
        } else {
          throw new Error(data.message || 'Invalid response format - expected success:true and data array');
        }
      } catch (err) {
        console.error('Error fetching colleges:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally { 
        setLoading(false); 
      }
    };
    
    fetchColleges();
  }, []);

  // --- FETCH FILTER OPTIONS OR GENERATE FROM DATA ---
  useEffect(() => {
    const fetchOrGenerateFilters = async () => {
      if (!colleges || colleges.length === 0) return;
      
      try {
        console.log('Attempting to fetch filter options from:', `${API_BASE_URL}/api/colleges/filters`);
        const response = await fetch(`${API_BASE_URL}/api/colleges/filters`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            console.log('Using server-provided filters');
            setFilterOptions(data.data);
            return;
          }
        }
        
        // Fallback to generating from college data
        console.log('Generating filters from college data');
        const states = [...new Set(colleges.map(c => c.state))].filter(Boolean).sort();
        const cities = [...new Set(colleges.map(c => c.city))].filter(Boolean).sort();
        const types = [...new Set(colleges.map(c => c.type))].filter(Boolean).sort();
        const degrees = [...new Set(colleges.flatMap(c => c.degrees || []))].filter(Boolean).sort();
        
        setFilterOptions({ states, cities, types, degrees });
        
      } catch (err) {
        console.log('Filter endpoint error, using fallback:', err);
        
        // Generate from college data as fallback
        const states = [...new Set(colleges.map(c => c.state))].filter(Boolean).sort();
        const cities = [...new Set(colleges.map(c => c.city))].filter(Boolean).sort();
        const types = [...new Set(colleges.map(c => c.type))].filter(Boolean).sort();
        const degrees = [...new Set(colleges.flatMap(c => c.degrees || []))].filter(Boolean).sort();
        
        setFilterOptions({ states, cities, types, degrees });
      }
    };
    
    fetchOrGenerateFilters();
  }, [colleges]);

  // --- FILTERED CITIES ---
  const filteredCities = useMemo(() => {
    if (filters.state === 'All' || !filterOptions.cities) return filterOptions.cities || [];
    return filterOptions.cities.filter(city => 
      colleges.some(c => c.city === city && c.state === filters.state)
    );
  }, [filterOptions.cities, filters.state, colleges]);

  // --- HANDLERS ---
  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ 
      ...prev, 
      [key]: value, 
      ...(key === 'state' ? { city: 'All' } : {}) 
    }));
  };
  
  const handleResetFilters = () => {
    setFilters({ state: 'All', city: 'All', type: 'All', degree: 'All', search: '' });
  };
  
  const hasActiveFilters = Object.values(filters).some(f => f !== 'All' && f !== '');

  // --- FILTER COLLEGES LOCALLY ---
  const displayedColleges = useMemo(() => {
    if (!colleges || !Array.isArray(colleges)) return [];
    
    return colleges.filter(c =>
      (filters.state === 'All' || c.state === filters.state) &&
      (filters.city === 'All' || c.city === filters.city) &&
      (filters.type === 'All' || c.type === filters.type) &&
      (filters.degree === 'All' || (c.degrees && c.degrees.includes(filters.degree))) &&
      (filters.search === '' || c.name.toLowerCase().includes(filters.search.toLowerCase()))
    );
  }, [colleges, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 lg:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Discover Your Dream College
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore top universities and colleges across India. Find the perfect match for your academic journey.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter & Search</h3>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                Active
              </span>
            )}
          </div>
          <div className="mb-6">
            <SearchBar 
              value={filters.search} 
              onChange={(v) => handleFilterChange('search', v)} 
              placeholder="Search colleges by name, city, or state..." 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <FilterSelect 
              label="State" 
              id="state-filter" 
              value={filters.state} 
              onChange={(e) => handleFilterChange('state', e.target.value)} 
              options={filterOptions.states || []} 
              icon={<MapPin className="w-4 h-4" />} 
            />
            <FilterSelect 
              label="City" 
              id="city-filter" 
              value={filters.city} 
              onChange={(e) => handleFilterChange('city', e.target.value)} 
              options={filteredCities} 
              icon={<Building className="w-4 h-4" />} 
            />
            <FilterSelect 
              label="Type" 
              id="type-filter" 
              value={filters.type} 
              onChange={(e) => handleFilterChange('type', e.target.value)} 
              options={filterOptions.types || []} 
              icon={<Award className="w-4 h-4" />} 
            />
            <FilterSelect 
              label="Degree/Stream" 
              id="degree-filter" 
              value={filters.degree} 
              onChange={(e) => handleFilterChange('degree', e.target.value)} 
              options={filterOptions.degrees || []} 
              icon={<BookOpen className="w-4 h-4" />} 
            />
          </div>
          <div className="flex justify-end">
            <button 
              onClick={handleResetFilters} 
              disabled={!hasActiveFilters} 
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className="w-4 h-4" /> Reset Filters
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 px-2">
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              {loading ? (
                <span className="italic">Loading colleges...</span>
              ) : error ? (
                <span className="text-red-500">Error loading colleges</span>
              ) : displayedColleges.length === 0 ? (
                'No colleges found matching your criteria.'
              ) : (
                `${displayedColleges.length} college${displayedColleges.length > 1 ? 's' : ''} found`
              )}
            </p>
          </div>
        </div>

        {/* College List */}
        <div className="space-y-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
              <p className="text-red-600 dark:text-red-400 font-semibold mb-2">Error Loading Colleges</p>
              <p className="text-red-500 dark:text-red-300 text-sm mb-2">{error}</p>
              <p className="text-red-400 dark:text-red-400 text-xs">
                Make sure your backend server is running on port 5000 and the database is properly seeded
              </p>
            </div>
          )}
          
          {!loading && !error && displayedColleges.length === 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">No colleges found</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Try adjusting your filters or search terms</p>
            </div>
          )}
          
          {!loading && !error && displayedColleges.map(college => (
            <div key={college.id}>
              <CollegeCard college={college} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;