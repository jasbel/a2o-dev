import { useState } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Container, Form, FormGroup, Input, Label } from "reactstrap"

const StringValue = () => {

    const [output, setOutput] = useState('')

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const currentInput =  e.target.value;
        setOutput(currentInput);
    }

    return (
        <div className="screen string-value">
            <Container className="text-center">
                <h2 className="title">String Value</h2>
                <Form className="mb-5">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input
                            type="textarea"
                            name="input-1"
                            id="input-1"
                            onChange={(e) => handleChange(e)}
                            placeholder="String Value"
                        />
                    </FormGroup>
                    <Button color="primary">Calculate</Button>
                </Form>

                <h2 className="mb-3">Response</h2>
                <Card >
                    <CardBody>
                        <pre id="output-1">  {output ?
                        `El resultado del valor es : ${ output }` : `No hay respuesta, introduzca valor en la entrada`   }</pre>
                    </CardBody>
                </Card>


            </Container>
        </div>
    )
}

export default StringValue
