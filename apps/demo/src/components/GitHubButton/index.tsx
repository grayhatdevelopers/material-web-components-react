"use client"
import GHButton from "react-github-btn";

const GitHubButton = (props: any) => <GHButton {...props}>{props.children}</GHButton>

export default GitHubButton