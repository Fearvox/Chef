{
  description = "Chef Frontier Monorepo Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Runtime & JS Ecosystem
            bun
            nodejs_22

            # Native & DSP Ecosystem (Placeholder for VST dev)
            cargo
            rustc
            rustfmt
            clippy
            cmake
            ninja
            pkg-config

            # Utils
            just
            biome
          ];

          shellHook = ''
            echo ":: Chef Frontier Environment Active ::"
            echo "=> Bun: $(bun --version)"
            echo "=> Rust: $(rustc --version)"
          '';
        };
      }
    );
}
