import React from "react";
import "./index.scss";
import BlogSectionCards from "../BlogSectionCards";

function BlogSection() {
  return (
    <div id="blogSection">
      <p className="blogSection_title">Latest Blogs</p>
      <div className="line"></div>
      <BlogSectionCards/>
    </div>
  );
}

export default BlogSection;
