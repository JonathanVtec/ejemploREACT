import {TaskRow2} from './TaskRow2'

export const TaskTable2 = ({tasks, toggleTask, showCompleted = false}) => {

    
    const taskTableRows = (doneValue) => {
        
        
        return (
            tasks
            .filter(task => task.done ===doneValue)
            .map(task => (
                <TaskRow2 task={task} key={task.name} toggleTask={toggleTask}/>
              ))
        )
    }


    return (
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className='table-primary'>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody> 
          {
           taskTableRows(showCompleted)
          }
        </tbody>
      </table>
    )
}