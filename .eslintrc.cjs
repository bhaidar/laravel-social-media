module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/vue3-recommended",
        "prettier"
    ],
    rules: {
        // override/add rules settings here, such as:
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        'vue/no-unused-vars': 'error'
    }
}