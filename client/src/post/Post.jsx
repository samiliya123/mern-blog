import Pos from "../pos/Pos"
import "./post.css"

export default function Post({post}) {
  
  return (
    <div className="post">
      {post.map((p) => (<Pos  post={p}/>))}
      </div>
  )
}
