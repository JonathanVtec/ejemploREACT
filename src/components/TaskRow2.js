export const TaskRow2 = ({task, toggleTask}) => {
    return ( 
        <tr>
            <td className="d-flex justify-content-between"> 
                {task.name}
                <input 
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                />
            </td>
        </tr>
    )
}