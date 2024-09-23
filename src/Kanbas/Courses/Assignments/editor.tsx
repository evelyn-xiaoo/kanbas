export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web 
          application running on Netlify. The landing page should include the following: Your full name
          and section Links to each of the lab assignments Link to the Kanbas application Links to all 
          relevent source code repos The Kanbas application should include a link to navigate back to the 
          landing page
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-assignment-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade">
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="Online">Online</option>
                </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <label>Online Entry Options:</label><br/>
            
                <input type="checkbox" name="check-entry" id="wd-chkbox-text"/>
                <label htmlFor="wd-chkbox-text">Tex Entry</label><br/>

                <input type="checkbox" name="check-entry" id="wd-chkbox-website"/>
                <label htmlFor="wd-chkbox-website">Website URL</label><br/>

                <input type="checkbox" name="check-entry" id="wd-chkbox-media"/>
                <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

                <input type="checkbox" name="check-entry" id="wd-chkbox-annotation"/>
                <label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-entry" id="wd-chkbox-file"/>
                <label htmlFor="wd-chkbox-file">File Upload</label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-text-fields-assign-to">Assign to</label>
                <br></br>
                <input id="wd-text-fields-assign-to" placeholder="Everyone" />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label htmlFor="wd-text-fields-due"> Due </label>
                <input type="date"
                    id="wd-text-fields-due"
                    value="2024-05-13"/><br/>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label htmlFor="wd-text-fields-available"> Available from </label>
                <br />
                <input type="date"
                    id="wd-text-fields-available"
                    value="2024-05-06"/><br/>
            </td>
            <td>
                <label htmlFor="wd-text-fields-until">Until</label>
                <br />
                <input type="date"
                    id="wd-text-fields-available"
                    value="2024-05-20"/><br/>
            </td>
          </tr>
        </table>
      </div>
  );}
  