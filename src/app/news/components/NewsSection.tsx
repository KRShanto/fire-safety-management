import React from 'react'
import NewsCard from './NewsCard';


interface NewsItem {
    date: string;
    title: string;
    description: string;
  }
export default function NewsSection() {
    const news: NewsItem[] = [
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          date: '16 Jan',
          title: "Building Safer Workplaces: A Look Inside FSM’s Fire and Explosion Safety Workshop at BUET",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ];


  return (
    <div>
       <div className="bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">
          Latest <span className="text-primary">NEWS</span> & <span className="text-blue-500">STORIES</span>
        </h1>
        <div className="bg-gray-300 h-80 w-full mb-8"></div>
        <div
          className="mx-auto my-8"
          style={{
            height: '2px',
            width: '100%',
           
            background: 'linear-gradient(to right, transparent 0%, red 50%, transparent 100%)',
          }}
        ></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              gradient={index===0}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
