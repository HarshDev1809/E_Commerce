import "./Pagination.css"

function Pagination({count,index,setPageIndex}){

    const btn = []

    for (let i = 1; i <= count; i++) {
        btn.push(<li className="page-item" onClick={()=>{setPageIndex(i)}}><a className={i===index? "page-link selected": "page-link"} href="#">{i}</a></li>);
    }

    return <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {btn}
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
}

export default Pagination;