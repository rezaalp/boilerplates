export const TableFormat = () => {

    let column = [
       {
        name: 'Name',
        columnName: 'name',
        render: (data)=> `mr. ${data}`
       },
       {
        name: 'Age',
        columnName: 'age'
       },
       {
        name: 'Hobby',
        columnName: 'hobby',
        
       }
    ]

    let row = [
        {
            name: 'saul',
            age: 25,
            hobby: 'law'

        },
        {
            name: 'white',
            age: 35,
            hobby: 'working'
        },
        {
            name: 'jesse',
            age: 20,
            hobby: 'hang out'
        }
    ]

    return (
        <>
            <table class="table-fixed">
                <thead>
                    <tr>
                        {column.map((el, index) => {
                            return <th key={index}>{el.name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                   {
                    row.map((el,index)=>{
                      return  (<tr>
                            {column.map(({name, columnName, render},index) =>{
                                if(render){
                                    console.log(render())
                                    return render(el?.[columnName])
                                }
                               return <td>{el?.[columnName]}</td>
                            })}
                        </tr>)
                    })
                   }
                </tbody>
            </table>
        </>
    )
}