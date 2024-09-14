import React, { useState } from 'react';

function StatusToggle({ camera }) {
  const [status, setStatus] = useState(camera.status);

  const toggleStatus = async () => {
    console.log(camera.id, camera.status)
    const newStatus = status === 'Active' ? 'Inactive' : 'Active';
    const response = await fetch('https://api-app-staging.wobot.ai/app/v1/update/camera/status', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4ApVMIn5sTxeW7GQ5VWeWiy',
      },
      body: JSON.stringify({ id: camera.id, status: newStatus }),
    });
    if (response.ok) {
      setStatus(newStatus);
    }
  };
  const btn = {
    border: "0px",
    cursor: "pointer",
  }
  const active = {
    color: '#22B779',
    fontWeight: '900',
  }
  const inActive = {
    color: 'gray',
    fontWeight: '900',
  }

  return <button onClick={toggleStatus} style={btn}>{status === "Active" ? <div style={active}>{status}</div> : <div style={inActive}>{status}</div>}</button>;
}

export default StatusToggle;
