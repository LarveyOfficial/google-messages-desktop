module.exports = {
  appId: "pw.kmr.amd",
  artifactName: "${productName}-v${version}-${os}-${arch}.${ext}",
  productName: "Google Messages",
  copyright: "Copyright 2023 Luis Vervaet",
  files: ["app/**/*", "resources/**/*"],
  directories: {
    buildResources: "resources",
    output: "dist",
  },
  linux: {
    target: ["AppImage", "snap", "deb", "pacman", "rpm", "freebsd", "zip"],
    executableName: "GoogleMessages",
    category: "Internet",
    desktop: {
      StartupWMClass: "google-messages-desktop",
    },
  },
  win: {
    target: ["nsis", "portable"],
  },
  mac: {
    category: "public.app-category.social-networking",
    target: { target: "default", arch: "universal" },
  },
  portable: {
    artifactName: "${productName}-v${version}-${os}-${arch}.portable.${ext}",
  },
  nsis: {
    allowToChangeInstallationDirectory: true,
    oneClick: false,
  },
};
