'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Profiles', [
      { user_id: 1, photo: 'https://i.pinimg.com/originals/58/6b/72/586b725dca8b20a9a3bff4a24d1179a3.jpg', info: 'Aspiring journalist', interests: 'Journalism', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 2, photo: 'http://images5.fanpop.com/image/photos/30400000/Impulse-smallville-impulse-30493889-888-971.jpg', info: 'Aspiring sportsman', interests: 'Athletics', country: 'USA', language: 'British English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 3, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/1200px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg', info: 'Aspiring military man', interests: 'Military', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 4, photo: 'https://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/3859882-6269102771-Bruce.jpg', info: 'The most famous investor', interests: 'Investments in Defense Sector', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 5, photo: 'https://screenfiction.org/content/image/0/40/420/7e9d1c19-full.webp', info: 'Investor in sports', interests: 'Sports', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 6, photo: 'https://i.pinimg.com/736x/c9/2d/7e/c92d7e6399727a559e44c5f984d73ff8.jpg', info: 'Human rights defender', interests: 'Human rights', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 7, photo: 'https://news.mit.edu/sites/default/files/images/201802/ChristopherHarting-2-Dome_5.jpg', info: 'MIT (Tech University)', interests: 'Technology and Defense', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 8, photo: 'https://michigan.law.umich.edu/sites/default/files/styles/primary_hero_scale_and_crop_630px_350px_/public/2021-04/UMLS_Beauty_2018_001_webbed_0.jpg?itok=h3CM8VPp', info: 'Gotham State University', interests: 'In Sports We Trust', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
      { user_id: 9, photo: 'https://univerlist.com/media/images/university/mini_a22uS17.jpg', info: 'Humanitarian University', interests: 'Journalism', country: 'USA', language: 'American English', createdAt: new Date(), updatedAt: new Date()},
     
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Profiles', null, {});
    
  }
};
