<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller

{
    public function signup(SignupRequest $request)
    {
        $data = $request ->validated();
        /** @var User $user */
        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }
    public function login(LoginRequest $request)
    {

        $credentials = $request ->validated();
        if(!Auth::attempt($credentials)){
            return response(['message'=>'provided email adress or password is incorrect'],422);
        }
        /** @var User  $user */

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        
        return response(compact('user','token'));
        
        
    }
   
    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();
        return response(['message'=>'user logged out successfully',$user],200) ;
    

        
    }
};