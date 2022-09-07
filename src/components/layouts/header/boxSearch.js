import classNames from "classnames/bind";
import styles from "./header.module.css";
let cx = classNames.bind(styles);
function BoxSearch({ keyWord, data }) {
    return (
        <>
            <div className={cx('box-search')}>
                <span>Tìm kiếm cho : {keyWord} </span>
                {data.map((item) => {
                    return (
                        <div className="media" key={item.id}>
                            <a className="d-flex align-items-center" href="#">
                                <img src="https://tophinhanh.com/wp-content/uploads/2021/12/anh-anime-nu-xinh-nhu-thien-than-full-hd-1-564x375.jpg"
                                    alt="" className={cx('avt')} />
                            </a>
                            <div className="media-body">
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    );
}

export default BoxSearch;