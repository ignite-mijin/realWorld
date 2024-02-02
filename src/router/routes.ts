import { RouteProps } from "react-router";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PostList from "@/pages/post/PostList";
import PostDetail from "@/pages/post/PostDetail";
import PostWrite from "@/pages/post/PostWrite";
import MyPage from "@/pages/MyPage";

export type RouteItem = RouteProps & {
  component: React.ComponentType;
  path: string;
  routes?: RouteItem[];
  page?: string;
};

export const RouteHome: RouteItem = {
  path: "/home",
  component: Home,
  page: "HOME",
};
export const RouteSignUp: RouteItem = {
  path: "/join",
  component: SignUp,
  page: "회원가입",
};
export const RouteSignIn: RouteItem = {
  path: "/login",
  component: SignIn,
  page: "로그인",
};

export const RouteMyPage: RouteItem = {
  path: "/mypage",
  component: MyPage,
  page: "마이페이지",
};
export const RoutePostList: RouteItem = {
  path: "/post",
  component: PostList,
  page: "블로그",
};
export const RoutePostDetail: RouteItem = {
  path: "/post/:id",
  component: PostDetail,
  page: "블로그 > 상세",
};
export const RoutePostWrite: RouteItem = {
  path: "/post/write",
  component: PostWrite,
  page: "블로그 > 작성",
};

const routes: RouteItem[] = [
  RouteHome,
  RouteSignUp,
  RouteSignIn,
  RouteMyPage,
  RoutePostList,
  RoutePostDetail,
  RoutePostWrite,
];

export default routes;
