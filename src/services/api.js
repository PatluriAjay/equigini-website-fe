const base_URL = "http://localhost:4000/api/";
export const base_URL_web_app = "http://localhost:9000/";

export const getAllDeals = async () => {
  try {
    const response = await fetch(`${base_URL}getAllDeals`);
    const result = await response.json();

    if (result.status === "E") {
      throw new Error(result.error_info || "Failed to fetch deals");
    }

    return result;
  } catch (error) {
    console.error("Error in getAllDeals:", error);
    throw error;
  }
};

// Fetch all blogs
export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${base_URL}getAllBlogs`);
    const result = await response.json();
    
    if (result.status === "E") {
      throw new Error(result.error_info || "Failed to fetch blogs");
    }
    
    return result;
  } catch (error) {
    console.error("Error in getAllBlogs:", error);
    throw error;
  }
};

// Fetch blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const response = await fetch(`${base_URL}getBlogBySlug/${slug}`);
    const result = await response.json();
    
    if (result.status === "E") {
      throw new Error(result.error_info || "Failed to fetch blog");
    }
    
    return result;
  } catch (error) {
    console.error("Error in getBlogBySlug:", error);
    throw error;
  }
};

// Fetch all sectors
export const getAllSectors = async () => {
  try {
    const response = await fetch(`${base_URL}getAllSectors`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllSectors:", error);
    throw error;
  }
};

// Fetch all stages
export const getAllStages = async () => {
  try {
    const response = await fetch(`${base_URL}getAllStages`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllStages:", error);
    throw error;
  }
};

// Fetch all ticket sizes
export const getAllTicketSizes = async () => {
  try {
    const response = await fetch(`${base_URL}getAllTicketSizes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllTicketSizes:", error);
    throw error;
  }
};

// Fetch all statuses
export const getAllStatuses = async () => {
  try {
    const response = await fetch(`${base_URL}getAllStatuses`);
    const data = await response.json();
    return data; // Return the full object, not just data.result_info
  } catch (error) {
    console.error('Error fetching statuses:', error);
    throw error;
  }
};

export const getPublicHomeData = async () => {
  try {
    const response = await fetch(`${base_URL}getPublicHomeData`);
    const data = await response.json();
    return data.result_info || { latest_blogs: [], testimonials: [] };
  } catch (error) {
    console.error('Error fetching public home data:', error);
    return { latest_blogs: [], testimonials: [] };
  }
};
