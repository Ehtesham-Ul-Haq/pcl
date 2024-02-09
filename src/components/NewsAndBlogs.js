import React from 'react';
import '../styles/Home.css';

export default function NewsAndBlogs(props) {

    const news = [
        {
          id: 1,
          title: 'Title of the News 1',
          description: 'Description of the News 1...',
          date: 'January 1, 2024',
          imageUrl: props.TournamentPicture,
          link: '/news/1'
        },
        {
          id: 2,
          title: 'Title of the News 2',
          description: 'Description of the News 2...',
          date: 'January 2, 2024',
          imageUrl: props.TournamentPicture,
          link: '/news/2'
        },
        {
            id: 3,
            title: 'Title of the News 3',
            description: 'Description of the News 3...',
            date: 'January 1, 2024',
            imageUrl: props.TournamentPicture,
            link: '/news/1'
          },
        // Add more news items as needed
      ];
    
  return (
    <div className="container latest-news">
      <h2><span>Latest &nbsp;</span> News</h2>
      <div className='news-container'>
        <div className="news-list">
            {news.map((item) => (
            <div className="news-item" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="news-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.date}</span>
                <a href={item.link}>&nbsp;Read more</a>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}
