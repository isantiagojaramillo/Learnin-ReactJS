import React, {useState, useEffect} from 'react'

export const useGetArticles = () => {
    const [articles, stablishArticles] = useState([ ]);
    const [loading, stablishLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            stablishArticles([
                {
                    id: 1,
                    title: 'Title of the first article'
                },
                {
                    id: 2,
                    title: 'Title of the second article'
                },
                {
                    id: 3,
                    title: 'Title of the third article'
                }
            ]);
            stablishLoading(false);
        }, 3000);
    }, []);

  return [articles, loading];
}
