'use strict';

const chooseType = (views) => Component => class extends React.Component {
  render() {
    if(views > 1000) {
      return (<Popular><Component {...this.props}/></Popular>)
    } else if(views < 100) {
      return (<New><Component {...this.props}/></New>)
    } else {
      return <Component {...this.props}/>
    }
  }
}

const List = props => {
    return props.list.map(item => {
      const VideoType = chooseType(item.views)(Video);
      const ArticleType = chooseType(item.views)(Article);
        switch (item.type) {
            case 'video':
                return (
                    <VideoType {...item} />
                );

            case 'article':
                return (
                    <ArticleType {...item} />
                );
        }
    });
};
