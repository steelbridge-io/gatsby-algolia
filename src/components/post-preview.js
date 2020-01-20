import React from 'react';
import {rhythm} from "../utils/typography";
import {Link} from "gatsby";
const PostPreview  = ({hit}) => {
  const title = hit.frontmatter.title || hit.fields.slug
  return (
     <article>
       <header>
         <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
         >
           <Link style={{boxShadow: `none`}} to={hit.fields.slug}>
             {title}
           </Link>
         </h3>
         <small>{new Date(hit.frontmatter.date).toLocaleDateString()}</small>
       </header>
       <section>
         <p
            dangerouslySetInnerHTML={{
              __html: hit.frontmatter.description || hit.excerpt
            }}
         />
       </section>
     </article>

  )
}
export default PostPreview
