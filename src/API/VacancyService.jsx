import axios from 'axios';

export default class VacancyService {
    static async getAll(limit=8, page=1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
}