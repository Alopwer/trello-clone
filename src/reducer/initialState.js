export const initialState = {
    boards: [
        {
            id: 0,
            title: 'New board',
            cover: 'rgb(176, 70, 50)',
            lists: [
                {
                    title: 'New List1',
                    cards: [
                        {
                            title: 'new card'
                        }
                    ]
                },
                {
                    title: 'New List1',
                    cards: [
                        {
                            title: 'new card'
                        }
                    ]
                },
            ]
        },
        {
            id: 1,
            title: 'Test board',
            cover: 'rgb(81, 152, 57)',
            lists: [
                {
                    title: 'New List2',
                    cards: [
                        {
                            title: 'new card'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Test board',
            cover: 'rgb(0, 174, 204)',
            lists: [
                {
                    title: 'New List3',
                    cards: [
                        {
                            title: 'new card'
                        }
                    ]
                }
            ]
        }
    ],
    currentBoard: {},
    currentColor: 'rgb(0, 121, 191)'
}