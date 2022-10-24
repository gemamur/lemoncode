import React from "react";
import { AuthLayout } from "@/layout/auth.layout";
import { Card, Button, CardHeader, CardContent, TextField, Alert } from "@mui/material";

interface infoForm {
  username: string;
  password: string;
}

interface Props {
  onLogin: (username: string, password: string) => void;
  error: string;
}

export const Login = (props: Props) => {
  const { onLogin, error } = props;
  const [infoForm, setInfoForm] = React.useState<infoForm>({
    username: "",
    password: ""
  });

  const handleChange = (field:string) =>(e: React.ChangeEvent<HTMLInputElement>)=> {
    setInfoForm({
      ...infoForm,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(infoForm.username, infoForm.password);
  }

  return (
    <>
    { error && ( 
      <Alert className="login-error" severity="error">Wrong user/password. Try with admin/test... </Alert>
    )
    }
    <Card sx={{padding:"20px"}}>
        <AuthLayout>
          <CardHeader title="Login" />
          <CardContent>
          <form onSubmit={handleSubmit} className="layout-center">

            <div>
              <div>
              <TextField id="username" label="Username" variant="outlined" size="small" margin="dense"
                  name="username"
                  value={infoForm.username}
                  onChange={handleChange("username")}
                />
              </div>
              <div>
              <TextField id="password" label="Password" variant="outlined" size="small" margin="dense"
                  type="password"
                  name="password"
                  value={infoForm.password}
                  onChange={handleChange("password")}
                />
              </div>
            </div>

            <Button id="login-button" variant="outlined" type="submit">Login</Button>
          </form>
          </CardContent>
        </AuthLayout>
    </Card>
    </>
  );
};
