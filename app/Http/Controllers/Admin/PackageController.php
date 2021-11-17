<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackageRequest;
use App\Http\Resources\PackageCollection;
use App\Http\Resources\UsersCollection;
use App\Package;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PackageCollection(
            Package::sortable()->paginate('20')
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PackageRequest $request)
    {
      $package =  Package::create([
                        'name' => $request->name,
                        'size' => $request->size,
                        'cost' => $request->cost,
                        'duration' => $request->duration,
                        'detail' => $request->detail
                    ]);
        if ($package) {
            return response()->json( [ 'message'=>'Package add Successfully','status' =>201,'data'=> $package]);
        }else {
            return response()->json('Package not saved Successfully', 401, []);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit(Package $package)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request ,$id)
    {
        $package = Package::find($id);
        if ($package) {
            $package->update([
                'name' => $request->name,
                'size' => $request->size,
                'cost' => $request->cost,
                'duration' => $request->duration,
                'details' => $request->details
            ]);
            return response()->json( [ 'message'=>'Package updated Successfully','status' =>201,'data'=> $package]);
        }else {
            return response()->json('Package not updated Successfully', 401, []);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $package = Package::find($id);
        if ($package) {
            $package->delete();
            return response()->json( [ 'message'=>'Package updated Successfully','status' =>200]);
        }else {
            return response()->json('Package not updated Successfully', 401, []);
        }
    }
}
