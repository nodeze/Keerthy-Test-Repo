const fs = require('fs');
const path = require('path');

const variableDeclarationRegex = /\b(?:let|const|var)\s+([a-zA-Z0-9_$]+)\s*=/g;

function isCamelCaseOrAllCaps(name) {
    // Allow ALL_CAPS (constants)
    if (/^[A-Z0-9_]+$/.test(name)) return true;

    // camelCase: no underscores, starts with lowercase letter, contains letters or digits
    return /^[a-z][a-zA-Z0-9]*$/.test(name);
} 

describe('Variable Naming Convention - camelCase or ALL_CAPS only', () => {
    const scriptsDir = path.join(__dirname, '../src');

    validate(scriptsDir)

});

function validate(scriptsDir) {
    fs.readdirSync(scriptsDir).forEach((file) => {
        const filePath = path.join(scriptsDir, file);

        if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
            validate(filePath)

        } else {

            const content = fs.readFileSync(filePath, 'utf8');

            test(`${file} should only use camelCase or ALL_CAPS variable names`, () => {
                let match;
                const invalidVariables = [];

                while ((match = variableDeclarationRegex.exec(content)) !== null) {
                    const varName = match[1];
                    if (!isCamelCaseOrAllCaps(varName)) {
                        invalidVariables.push(varName);
                    }
                }

                expect(invalidVariables).toEqual([]);
            });
        }

    });
}


