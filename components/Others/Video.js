import ReactPlayer from "react-player";

const videoUrls = [
  "https://youtu.be/nBiZs9jwuyc",
  "https://youtu.be/ViNx1k6mXMg",
  "https://youtu.be/N12-YtJa9IU"
];

const Video = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Videos</h2>
          <div className="mt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {videoUrls.map((url, index) => (
              <div key={index} className="group">
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Video {index + 1}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Video;