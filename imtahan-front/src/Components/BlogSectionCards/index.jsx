import React from "react";
import "./index.scss"

function BlogSectionCards() {
  return (
    <div className="blogSectionCards">
      <div className="blogSectionCard one">
        <div className="blogSectionCard_hover">
          <p className="blogSectionCard_hover_desc">
            Here are the trends I see coming this fall
          </p>
          <p className="blogSectionCard_hover_date">BY ADMIN | DEC 01, 2017</p>
          <p className="blogSectionCard_hover_readMore">Read more</p>
        </div>
      </div>
      <div className="blogSectionCard two">
        <div className="blogSectionCard_hover">
          <p className="blogSectionCard_hover_desc">
            Here are the trends I see coming this fall
          </p>
          <p className="blogSectionCard_hover_date">BY ADMIN | DEC 01, 2017</p>
          <p className="blogSectionCard_hover_readMore">Read more</p>
        </div>
      </div>
      <div className="blogSectionCard three">
        <div className="blogSectionCard_hover">
          <p className="blogSectionCard_hover_desc">
            Here are the trends I see coming this fall
          </p>
          <p className="blogSectionCard_hover_date">BY ADMIN | DEC 01, 2017</p>
          <p className="blogSectionCard_hover_readMore">Read more</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSectionCards;
