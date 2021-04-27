module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/",
  },
  plugins: ["@snowpack/plugin-sass"],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2015",
  },
};
