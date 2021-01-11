function LikeButton(){
    //LikeButton에 liked 상태를 추가했다.
    const [liked, setLiked] = React.useState(false);
    const text = liked ? 'cancel':'like';
    return (<button onClick={()=>setLiked(!liked)}>{text}</button>);
    // return React.createElement(
    //     'button',
    //     {onClick: () => setLiked(!liked)},
    //     text,
    // );
}

function Container(){
    const [count, setCount] = React.useState(0);
    return (
    <div>
        <LikeButton />
        <div>
            <span>현재 카운트: </span>
            <span stype={{ marginRight: 10, color: 'red'}}>{count}</span>
            <button onClick={()=>setCount(count+1)}>{'+'}</button>
            <button onClick={()=>setCount(count-1)}>{'-'}</button>
        </div>
    </div>);
    // return React.createElement(
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
ReactDOM.render(React.createElement(Container), 
    domContainer
);