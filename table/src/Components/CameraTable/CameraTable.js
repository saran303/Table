import React from 'react';
import styles from './CameraTable.module.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ReversedFilterDramaOutlinedIcon from '../Cloud';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import StatusToggle from '../StatusToggle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';

function CameraTable({ cameraList, searchTerm, locationFilter, statusFilter }) {
    // console.log("From cameraRTable", cameraList)
  const filteredCameras = cameraList
  .filter((camera) =>
    camera.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((camera) =>
    locationFilter ? camera.location === locationFilter : true // Location filter
  )
  .filter((camera) =>
    statusFilter ? camera.status === statusFilter : true // Status filter
  );
  const tableStyle = {
    width: "100%",
    margin: "0px",
    marginLeft: "50px",
}
const btn = {
  border: "0px",
  cursor: "pointer",
}
  return (
    <table style={tableStyle}>
      <thead style={{height:"50px"}}>
        <tr>
          {/* <input type='checkBox' style={{ display: "flex",textAlign: "start",marginTop: "20px"}}></input> */}
          <th style={{textAlign: "start"}}><label class={styles.customCheckbox}><span class={styles.checkmark}></span></label></th>
          <th style={{textAlign: "start"}}>NAME</th>
          <th style={{textAlign: "start"}}>HEALTH</th>
          <th style={{textAlign: "start"}}>LOCATION</th>
          <th style={{textAlign: "start"}}>RECORDER</th>
          <th style={{textAlign: "start"}}>TASKS</th>
          <th style={{textAlign: "start"}}>STATUS</th>
          <th style={{textAlign: "start"}}>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {filteredCameras.map(camera => (
          <tr key={camera.name} style={{height:"50px", textAlign: "start"}}>
            {/* <td><input type='checkBox' style={{marginTop: "20px", border: "0px"}}></input></td> */}
            <td><label class={styles.customCheckbox}><span class={styles.checkmark}></span></label></td>
            <td>{camera.current_status === "Online" ? <div className={styles.wrapper}><div className={styles.online}></div>{camera.name}{camera.hasWarning === true ? <ErrorOutlineIcon fontSize="small" sx={{ color: "orange" }}/>:""}</div> : <div className={styles.wrapper}><div className={styles.offline}></div>{camera.name}{camera.hasWarning === true ? <ErrorOutlineIcon fontSize="small" sx={{ color: "orange" }}/>:""}</div>}</td>
            <td><div className={styles.health}><ReversedFilterDramaOutlinedIcon fontSize="small" /><span className={camera.health.cloud === "A"?styles.circleGreen:styles.circleOrange}>{camera.health.cloud}</span><KitchenOutlinedIcon fontSize="medium"/><span className={styles.circleGreen}>{camera.health.device}</span></div></td>
            <td>{camera.location}</td>
            <td>{camera.recorder === "" ? "N/A" : camera.recorder}</td>
            <td>{camera.tasks === "" ? "N/A" : camera.tasks} Tasks</td>
            <td><StatusToggle camera={camera} /></td>
            <button style={btn}>{camera.status === "Active" ? <DoDisturbAltIcon fontSize="small"  color="action" />:<CheckCircleOutlinedIcon fontSize="small"  color="action"/>}</button>
            {/* <td>{camera.status === "Active" ? <div className={styles.active}>{camera.status}</div> : <div>{camera.status}</div>}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CameraTable;
