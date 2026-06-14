export type Video = {
    id: number;
    videoUrl: string;
    authorName: string;
    description: string;
    likesCount: number;
};

export const videos: Video[] = [
    {
        id: 1,
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        authorName: "Big Buck Bunny",
        description: "Video thử nghiệm đầu tiên.",
        likesCount: 1250,
    },
    {
        id: 2,
        videoUrl:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        authorName: "MDN Video",
        description: "Một khoảnh khắc ngày thứ Sáu.",
        likesCount: 980,
    },
    {
        id: 3,
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        authorName: "Sintel",
        description: "Trailer phim hoạt hình Sintel.",
        likesCount: 2450,
    },
];