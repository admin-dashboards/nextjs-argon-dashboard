import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GithubProvider({
      clientId: "d59dc667e6c0308235f3",
      clientSecret: "efbf1d02a2d51618efa40e0c685716d7593278f6",
    }),
    GoogleProvider({
      clientId:
        "92121706328-f8tkgvpsobp4a25b863pdb2se173tiig.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
