set -e

# compile typescript files to javascript
tsc --project tsconfig.json

# generate json schema from typescript types
typescript-json-schema tsconfig.json "*" --noExtraProps > build/src/schema.json
