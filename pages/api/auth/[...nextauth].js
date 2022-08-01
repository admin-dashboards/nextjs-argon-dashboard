import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GithubProvider({
      clientId: "d59dc667e6c0308235f3",
      clientSecret: "bbfe446a2cd2bfb52a33a86757ab2a4a38cc81ce",
    }),
    GoogleProvider({
      clientId:
        "92121706328-f8tkgvpsobp4a25b863pdb2se173tiig.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
