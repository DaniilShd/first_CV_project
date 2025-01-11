import axios from 'axios';

export default class GetPost {
    static async getPost() {
            const response = await axios.get("http://127.0.0.1:8000/report", {})
            return response
    }
}
