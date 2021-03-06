import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import NaverNewsRepository from 'assets/api/NaverNews';

@autobind
class NaverNewsStore {
  @observable newsList = [];

  @action
  handleSearchNews = async () => {
    try {
      const response = await NaverNewsRepository.handleSearchNews();
      this.newsList = response.data.items;
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };
}

export default NaverNewsStore;
