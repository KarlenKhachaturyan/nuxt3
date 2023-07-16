export const useUtilities = () => {
    function setHeadTitle(word, defaultWord) {
        return word ? word.toString().toLocaleUpperCase()  : defaultWord
    }

    return {
        setHeadTitle
    }
}