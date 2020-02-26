export const helper = {
    randomString(length){
        let result = "";
        while (result.length < length) {
            result += Math.random().toString(32).substring(2, 12);
            result = result.replace(/\d/g, "");
        }
        result = result.substring(0, length);

        return result;
    },

    randomNumber(length) {
        let result = "";

        while (result.length < length) {
            result += Math.random().toString().substring(2, 12);
        }

        result = result.substring(0, length);

        return result;
    }
}