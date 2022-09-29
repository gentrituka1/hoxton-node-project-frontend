import { SetStateAction } from "react";
import { Post } from "../App";

type Props = {
  posts: any;
  setPosts: React.Dispatch<SetStateAction<Post[]>>;
};

export function SearchPage({ posts, setPosts }: Props) {
  return (
    <div>
      <div>
        <h1>Title</h1>
      </div>
    </div>
  );
}
