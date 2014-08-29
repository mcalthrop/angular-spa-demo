module.exports = {
    src: [
        'Gruntfile.js',
        'build/**/*.js',
        'src/js/app/**/*.js',
        'test/unit/**/*.js'
    ],
    options: {
        preset: 'google',
        disallowEmptyBlocks: true,
        disallowKeywords: ['with'],
        disallowKeywordsOnNewLine: [
            'else'
        ],
        disallowMixedSpacesAndTabs: true,
        disallowNewlineBeforeBlockStatements: true,
        disallowPaddingNewlinesInBlocks: true,
        disallowSpaceAfterObjectKeys: true,
        disallowTrailingComma: true,
        requireBlocksOnNewline: true,
        requireMultipleVarDecl: true,
        requireSpaceAfterLineComment: true,
        requireSpacesInFunctionDeclaration: {
            beforeOpeningCurlyBrace: true
        },
        validateIndentation: 4,
        validateJSDoc: {
            checkParamNames: true,
            checkRedundantParams: true,
            requireParamTypes: true
        },
        validateQuoteMarks: {
            mark: '\'',
            escape: true
        },
        maximumLineLength: null
    }
};
