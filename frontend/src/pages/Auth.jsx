// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
// import { z } from "zod";

// const emailSchema = z.string().email("Please enter a valid email address");
// const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const { signIn, signUp, user, isLoading } = useAuth();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   useEffect(() => {
//     if (!isLoading && user) {
//       navigate("/admin");
//     }
//   }, [user, isLoading, navigate]);

//   const validateForm = () => {
//     const newErrors = {};

//     const emailResult = emailSchema.safeParse(email);
//     if (!emailResult.success) {
//       newErrors.email = emailResult.error.errors[0].message;
//     }

//     const passwordResult = passwordSchema.safeParse(password);
//     if (!passwordResult.success) {
//       newErrors.password = passwordResult.error.errors[0].message;
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       if (isLogin) {
//         const { error } = await signIn(email, password);

//         if (error) {
//           if (error.message.includes("Invalid login credentials")) {
//             toast({
//               title: "Login Failed",
//               description: "Invalid email or password. Please try again.",
//               variant: "destructive",
//             });
//           } else {
//             toast({
//               title: "Login Failed",
//               description: error.message,
//               variant: "destructive",
//             });
//           }
//         } else {
//           toast({
//             title: "Welcome back!",
//             description: "You have been logged in successfully.",
//           });
//         }
//       } else {
//         const { error } = await signUp(email, password, fullName);

//         if (error) {
//           if (error.message.includes("already registered")) {
//             toast({
//               title: "Account Exists",
//               description:
//                 "This email is already registered. Please log in instead.",
//               variant: "destructive",
//             });
//           } else {
//             toast({
//               title: "Sign Up Failed",
//               description: error.message,
//               variant: "destructive",
//             });
//           }
//         } else {
//           toast({
//             title: "Account Created!",
//             description: "Your account has been created successfully.",
//           });
//         }
//       }
//     } catch {
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Loader2 className="w-8 h-8 animate-spin text-secondary" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary/20 p-4">
//       <div className="w-full max-w-md">
//         <Button
//           variant="ghost"
//           className="mb-6 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
//           onClick={() => navigate("/")}
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Home
//         </Button>

//         <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
//           <div className="text-center mb-8">
//             <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
//               <span className="text-secondary-foreground font-bold text-lg">
//                 R
//               </span>
//             </div>
//             <h1 className="text-2xl font-bold text-foreground">
//               {isLogin ? "Admin Login" : "Create Account"}
//             </h1>
//             <p className="text-muted-foreground mt-2">
//               {isLogin
//                 ? "Sign in to access the admin dashboard"
//                 : "Create an admin account"}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {!isLogin && (
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
//                   placeholder="John Doe"
//                 />
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setErrors((prev) => ({ ...prev, email: undefined }));
//                 }}
//                 className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary ${
//                   errors.email ? "border-destructive" : "border-input"
//                 }`}
//                 placeholder="admin@company.com"
//               />
//               {errors.email && (
//                 <p className="text-destructive text-sm mt-1">
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                     setErrors((prev) => ({ ...prev, password: undefined }));
//                   }}
//                   className={`w-full px-4 py-3 pr-12 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary ${
//                     errors.password ? "border-destructive" : "border-input"
//                   }`}
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-destructive text-sm mt-1">
//                   {errors.password}
//                 </p>
//               )}
//             </div>

//             <Button
//               type="submit"
//               variant="cta"
//               size="lg"
//               className="w-full"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                   {isLogin ? "Signing in..." : "Creating account..."}
//                 </>
//               ) : isLogin ? (
//                 "Sign In"
//               ) : (
//                 "Create Account"
//               )}
//             </Button>
//           </form>

//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               onClick={() => {
//                 setIsLogin(!isLogin);
//                 setErrors({});
//               }}
//               className="text-secondary hover:text-secondary/80 text-sm font-medium"
//             >
//               {isLogin
//                 ? "Don't have an account? Sign up"
//                 : "Already have an account? Sign in"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const { signIn, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/admin");
    }
  }, [user, isLoading, navigate]);

  const validateForm = () => {
    const newErrors = {};

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = emailResult.error.errors[0].message;
    }

    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = passwordResult.error.errors[0].message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome Back",
          description: "Successfully logged in.",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary/20 p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-6 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary-foreground font-bold text-lg">
                R
              </span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Admin Login
            </h1>
            <p className="text-muted-foreground mt-2">
              Sign in to access the admin dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary ${
                  errors.email ? "border-destructive" : "border-input"
                }`}
                placeholder="admin@company.com"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  className={`w-full px-4 py-3 pr-12 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.password ? "border-destructive" : "border-input"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-destructive text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;