module.exports = {
    "rules": {
        "require-jsdoc": ["warn", {
            "require": {
                "ArrowFunctionExpression": true,
                "ClassDeclaration": true,
                "FunctionDeclaration": true,
                "MethodDefinition": true
            }
        }],
        "valid-jsdoc": ["warn", {
            "requireReturn": false
        }]
    }
};
