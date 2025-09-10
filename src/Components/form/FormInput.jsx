import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  name,
  formState, 
  className = "",
}) => {
  const error = formState?.errors[name]; 

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <Label htmlFor={name} className="text-sm font-medium">
          {label}
        </Label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        )}
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          className={Icon ? "pl-10" : ""}
          {...register(name)}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormInput;
