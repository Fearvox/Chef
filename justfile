set shell := ["bash", "-c"]

default:
    @just --list

# Start the Chef DASH interface and Strudel local environment
dev:
    bun run dev

# Run all test suites across the monorepo
test:
    bun test
    cargo test --workspace || echo "No cargo workspace yet"

# Format and lint all code
lint:
    bun x biome check .
    cargo clippy --workspace -- -D warnings || echo "No cargo workspace yet"

# Enter the Nix development shell
nix-shell:
    nix develop
