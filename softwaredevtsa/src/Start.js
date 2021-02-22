import React from 'react'
import Button from 'react-bootstrap/Button'

export const Start = () => (
    <>
    <br></br>
    <div>
    <h2>Student's General Information</h2>
    <br></br>
    <h4>Sex</h4>
    <Button variant="outline-primary">Male</Button>{' '}
    <Button variant="outline-primary">Female</Button>{' '}
    <hr class="solid"></hr>
    </div>
        <div>
        <h4>Age</h4>
        <Button variant="outline-primary">15</Button>{' '}
        <Button variant="outline-primary">16</Button>{' '}
        <Button variant="outline-primary">17</Button>{' '}
        <Button variant="outline-primary">18</Button>{' '}
        <Button variant="outline-primary">19</Button>{' '}
        <Button variant="outline-primary">20</Button>{' '}
        <Button variant="outline-primary">21</Button>{' '}
        <Button variant="outline-primary">22</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Address</h4>
        <input id="address" type="text" value=""></input>
        <hr class="solid"></hr>
        <br></br>
    </div>
    <div>
        <br></br>
        <h2>Background Information</h2>
        <br></br>
        <h4>Parent's Status</h4>
        <p>What is the current cohibition status of the parents?</p>
        <Button variant="outline-primary">Together</Button>{' '}
        <Button variant="outline-primary">Seperated</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Family Size</h4>
        <p>What is the student's family size (including him/herself)?</p>
        <Button variant="outline-primary">1-2</Button>{' '}
        <Button variant="outline-primary">3</Button>{' '}
        <Button variant="outline-primary">3+</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Mother's Education</h4>
        <p>What is the highest level of education that the mother has received?</p>
        <Button variant="outline-primary">None</Button>{' '}
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-primary">Secondary</Button>{' '}
        <Button variant="outline-primary">Higher</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Father's Education</h4>
        <p>What is the highest level of education that the father has received?</p>
        <Button variant="outline-primary">None</Button>{' '}
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-primary">Secondary</Button>{' '}
        <Button variant="outline-primary">Higher</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Mother's Occupation</h4>
        <p>What is the mother's current or most recent occupation?</p>
        <Button variant="outline-primary">Healthcare</Button>{' '}
        <Button variant="outline-primary">Civil Services</Button>{' '}
        <Button variant="outline-primary">At Home</Button>{' '}
        <Button variant="outline-primary">Other</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Father's Occupation</h4>
        <p>What is the father's current or most recent occupation?</p>
        <Button variant="outline-primary">Healthcare</Button>{' '}
        <Button variant="outline-primary">Civil Serivces</Button>{' '}
        <Button variant="outline-primary">At Home</Button>{' '}
        <Button variant="outline-primary">Other</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Travel Time</h4>
        <p>How long does it take the student to travel to or from school?</p>
        <Button variant="outline-primary">None</Button>{' '}
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-primary">Secondary</Button>{' '}
        <Button variant="outline-primary">Higher</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Study Time</h4>
        <p>How long does the student generally study for?</p>
        <Button variant="outline-primary">1 - 2 Hours</Button>{' '}
        <Button variant="outline-primary">2 - 5 Hours</Button>{' '}
        <Button variant="outline-primary">5- 10 Hours</Button>{' '}
        <Button variant="outline-primary">10+ Hours</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Past Failures</h4>
        <p>How many times has the student failed a previous class?</p>
        <Button variant="outline-primary">None</Button>{' '}
        <Button variant="outline-primary">1 - 3 Failures</Button>{' '}
        <Button variant="outline-primary">4+ Failures</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Extracirriculars</h4>
        <p>Does the student have any extracirriculars?</p>
        <Button variant="outline-primary">Yes</Button>{' '}
        <Button variant="outline-primary">No</Button>{' '}
        <hr class="solid"></hr>
    </div>
    <div>
        <h4>Extra Educational Support</h4>
        <p>Does the student receive additional educational support (ex. IEP, 504)?</p>
        <Button variant="outline-primary">Yes</Button>{' '}
        <Button variant="outline-primary">No</Button>{' '}
        <hr class="solid"></hr>
    </div>
    </>
)