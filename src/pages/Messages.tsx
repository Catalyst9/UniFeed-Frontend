import "../styles/Messages.css";

export default function Messages() {
  UniFeedTable = API.call("UniFeedTable");
  GroupsFeedTable = API.call("GroupsFeedTable");

  return (
    <div className="messagespage">
      <div className="title-banner">
        <h1 className="title">Messages</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="textbox">Chats</div>
          <div className="bar"></div>
          <div className="chat-container">
            
            {UniFeedTable.map((post, index) => (
              <UniFeedPost
                key={index}
                Name={post.Name}
                ProfilePicture={post.ProfilePicture}
                Time={post.Time}
                Message={post.Message}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="message-container"></div>
        </div>
      </div>
    </div>
  );
}


function UniFeedPost({
  Name,
  ProfilePicture,
  Time,
  Message,
}: UniFeedPostProps) {
  return (
    <div className="post">
      <div className="left-section">
        <img src={ProfilePicture} alt={Name} className="picture" />
      </div>
      <div className="right-section">
        <div className="row">
          <p className="name">{Name}</p>
          <p className="time">{Time}</p>
        </div>
        <div className="row">
          <div className="line"></div>
        </div>
        <div className="row">
          <p className="message">{Message}</p>
        </div>
      </div>
    </div>
  );
}

interface UniFeedPostProps {
  Name: string;
  ProfilePicture: string;
  Time: string;
  Message: string;
}

function GroupsFeedPost({
  Name,
  ProfilePicture,
  Time,
  Message,
  GroupName,
}: GroupsFeedPostProps) {
  return (
    <div className="post">
      <div className="left-section">
        <img src={ProfilePicture} alt={Name} className="picture" />
      </div>
      <div className="right-section">
        <div className="row">
          <p className="name">{Name}</p>
          <p className="groupname">• {GroupName}</p>
          <p className="time">{Time}</p>
        </div>
        <div className="row">
          <div className="line"></div>
        </div>
        <div className="row">
          <p className="message">{Message}</p>
        </div>
      </div>
    </div>
  );
}

interface GroupsFeedPostProps {
  Name: string;
  ProfilePicture: string;
  Time: string;
  Message: string;
  GroupName: string;
}
*/
