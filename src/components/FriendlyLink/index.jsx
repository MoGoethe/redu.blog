import React from "react"

const FriendlyLink = () =>{

	return (
		<div className="main friendly-link">
			<p className="main-end"><span> -- END -- </span></p>
			<div className="friendly-link-item">
				<ul className="list">
					<li className="list-item"><p className="fl-title">技术支持</p></li>
					<li className="list-item"><a target="_blank" href="#">EI'BOOK</a></li>
					<li className="list-item"><a target="_blank" href="#">大屈</a></li>
					<li className="list-item"><a target="_blank" href="#">乐乐姐</a></li>
				</ul>
				<ul className="list">
					<li className="list-item"><p className="fl-title">友情链接</p></li>
					<li className="list-item"><a target="_blank" href="https://github.com/MoGoethe">Github · MoGoethe</a></li>
					<li className="list-item"><a target="_blank" href="http://eibook.cn">EI'BOOK</a></li>
					<li className="list-item"><a target="_blank" href="http://f2e-server.com">f2eserver · Tools</a></li>
					<li className="list-item"><a target="_blank" href="http://xueliang.org">xueliang.org</a></li>
					<li className="list-item"><a target="_blank" href="http://www.jianshu.com/u/05b4d35b1d55">Janshu · Seaseeyoul</a></li>
				</ul>
			</div>
		</div>
	)
}

export default FriendlyLink 