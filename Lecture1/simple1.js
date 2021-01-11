function LikeButton() {
  //LikeButton에 liked 상태를 추가했다.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? 'cancel' : 'like';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // return React.createElement(
  //     'button',
  //     {onClick: () => setLiked(!liked)},
  //     text,
  // );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    stype: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, '+'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, '-'))); // return React.createElement(
  //     'div',
  //     null,
  //     React.createElement(LikeButton),
  //     React.createElement(
  //         'div',
  //         {style: {marginTop: 20}},
  //         React.createElement('span', null, '현재 카운트: '),
  //         React.createElement('span',{stype: {marginRight: 10}}, count),
  //         React.createElement(
  //             'button',
  //             {onClick: () => setCount(count+1)},
  //             '+',
  //         ),
  //         React.createElement(
  //             'button',
  //             {onClick: () => setCount(count-1)},
  //             '-',
  //         ),
  //     ),
  // );
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);